'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('test_table', 'is_active', {
      type: Sequelize.BOOLEAN,
      defaultValue: false, 
      allowNull: false,    
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('test_table', 'is_active');
  }
};
