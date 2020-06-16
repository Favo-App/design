import { createMuiTheme } from '@material-ui/core/styles'
import { favoTokens } from '../tokens'

export const theme = createMuiTheme({
  "palette":{
    "common":{
      "black": favoTokens.color.$black,
      "white": favoTokens.color.$white,
    },
    "type":"light",
    "primary":{
      "main": favoTokens.color.$purple,
      "contrastText": favoTokens.color.$white
    },
    "typography": { 
      "button":{
        "fontWeight": 500,
        "fontSize":"0.875rem",
        "lineHeight": 1.75,
        "letterSpacing": ({ variant }) => (variant === 'contained' ? 2.36 : 0.81),
        "textTransform": "none"
      }
    }
  }
})