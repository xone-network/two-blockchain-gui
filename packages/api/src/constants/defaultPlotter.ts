import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'Two Proof of Space',
  options: optionsForPlotter(PlotterName.TWOPOS),
  defaults: defaultsForPlotter(PlotterName.TWOPOS),
  installInfo: { installed: true },
};
