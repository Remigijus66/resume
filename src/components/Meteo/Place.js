import * as React from 'react';
import MainContext from "../../context/MainContext"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from "autosuggest-highlight/parse";
import { debounce } from '@mui/material/utils';
import closeIcon from '../../images/close-black-transparent.png'

const GOOGLE_MAPS_API_KEY = 'AIzaSyDAAPUFwT8luAVssdp6TOeIy_BjIaRw3NA';
const loadScript = (src, position, id) => {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const Maps = ({ currentLocacion }) => {
  const { inputValue, setInputValue, value, setValue, setLat, setLong, setMeteo } = React.useContext(MainContext)
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  React.useEffect(() => {
    if (value) {
      const geocoder = new window.google.maps.Geocoder()
      geocoder
        .geocode({ placeId: value.place_id })
        .then(({ results }) => {
          const location = results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;
          setLat(latitude())
          setLong(longitude())
        })
        .catch((e) => window.alert("Geocoder failed due to: " + e));
    }
  }, [value])


  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector('head'),
        'google-maps',
      );
    }
    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 400),
    [],
  );

  React.useEffect(() => {
    let active = true;
    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }
    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }
    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];
        if (value) {
          newOptions = [value];
        }
        if (results) {
          newOptions = [...newOptions, ...results];
        }
        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: '16px 16px 0px 0px', display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1' }}>
      <Autocomplete
        id="google-map-demo"
        sx={{
          border: 'none', width: '100%',
          borderRadius: '16px 0px 0px 0px', backgroundColor: '#f1f1f1'
        }}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.description
        }
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value ? value : currentLocacion}
        noOptionsText="No locations"
        onChange={(event, newValue) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="" fullWidth sx={{
            fieldset: {
              border: "none",
            }
          }} />
        )}
        renderOption={(props, option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings || [];

          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match) => [match.offset, match.offset + match.length]),
          );

          return (
            <li {...props}>
              <Grid container alignItems="center">
                <Grid item sx={{ display: 'flex', width: 44 }}>
                  <LocationOnIcon sx={{ color: 'text.secondary' }} />
                  <></>
                </Grid>
                <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                  {parts.map((part, index) => (
                    <Box
                      key={index}
                      component="span"
                      sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                    >
                      {part.text}
                    </Box>
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
      <img onTouchEnd={() => setMeteo(false)} onClick={() => setMeteo(false)} className='icon' style={{ padding: '10px' }} src={closeIcon} alt="" />
    </div>
  );
}

export default Maps