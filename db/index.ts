import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('dictionary.db', {
  enableChangeListener: true,
});

export default db;
