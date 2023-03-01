export const service_wallet = 'two_wallet';
export const service_full_node = 'two_full_node';
export const service_farmer = 'two_farmer';
export const service_harvester = 'two_harvester';
export const service_simulator = 'two_full_node_simulator';
export const service_daemon = 'daemon';
export const service_plotter = 'chia_plotter';
export const service_data_layer = 'two_data_layer';

// Corresponds with outbound_message.py NodeTypes
export const service_connection_types = {
  1: 'Full Node',
  2: 'Harvester',
  3: 'Farmer',
  4: 'Timelord',
  5: 'Introducer',
  6: 'Wallet',
  7: 'Data Layer',
};
