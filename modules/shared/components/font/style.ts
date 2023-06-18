import { makeStyles } from '@rneui/themed';

export default makeStyles((theme) => ({
  defaultStyle: {
    color: theme.font.grayscale['900'],
  },
  screenFont: {
    fontSize: theme.font.type.title4.fontSize,
  },
}));
