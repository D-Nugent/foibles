import { Platform } from "react-native"

const globalColours = {
    primary: '#e8e8e8',
    offset: '#454545'
}

export const defaultStyles = {
    colour: {
        primaryColour: globalColours.primary,
        offsetColour: globalColours.offset,
        untracked: globalColours.primary,
        success: '#00D696',
        failure: '#EE9A41',
    },
    fontSize: {
        headingPrimary: 24,
        headingSecondary: 20,
        textPrimary: 16,
        textSecondary: 14,
        textDetail: 12,
    },
    margin: {
        xxs: 4,
        xs: 8,
        s: 16,
        m: 24,
        l: 32,
        xl: 40
    },
}

export const styleMixins = {
    boxShadow: (elevation=4) => {
        if (Platform.OS === 'ios') {
            return {
                shadowColor: globalColours.offset,
                shadowOffset: {width: elevation, height: elevation},
                shadowOpacity: 0.25,
                backgroundColor: 'red'
            }
        } else {
            return {
                elevation: elevation*2,
                shadowColor: '#45454580',
            }
        }
    },
    flex: (type='row') => {
        return {
            display: 'flex',
            flexDirection: type,
        }
    }
}

export const hexToRgbA = (hex, opacity) => {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = `0x${c.join('')}`;
      return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
    }
    throw new Error('Bad Hex');
  };