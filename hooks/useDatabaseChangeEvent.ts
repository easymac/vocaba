import { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';

/**
 * This hook listens for changes in the database
 * and updates the state object to include the
 * most recent change as returned by the subscription.
 * 
 * Not sure if this is the most useful pattern?
 * But our database is small enough that I'm planning
 * to simply re-query all the data upon change?
 */
export function useDatabaseChangeEvent() {
  const [change, setChange] = useState<any>();

  useEffect(() => {
    const listener = (event: SQLite.DatabaseChangeEvent) => setChange(event);
    const subscription = SQLite.addDatabaseChangeListener(listener);
    return () => {
      subscription.remove();
    }
  }, [])

  return change;
}