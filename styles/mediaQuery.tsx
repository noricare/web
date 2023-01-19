import { deviceQuery } from "constant";


interface IdevicedMediaQuery  {
  [key: string]: string
}

const { mobile, desktop } = deviceQuery;

const deviceMediaQuery:IdevicedMediaQuery = {
  mobile: `screen and ${mobile}`,
  desktop: `screen and ${desktop}`,
};

const applyMediaQuery = (device:string) => `@media ${deviceMediaQuery[device]}`;

const theme = {
  device: deviceMediaQuery,
};

export default applyMediaQuery;