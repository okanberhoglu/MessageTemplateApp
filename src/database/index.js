import SQlite from 'react-native-sqlite-storage';

export class BaseManager {
  constructor() {
    this.sqlite = SQlite;
    this.sqlite.DEBUG(true);
    this.sqlite.enablePromise(true);
    this.sqlite
      .openDatabase({
        name: 'Messages',
        location: 'default',
      })
      .then(db => (this.dbInstance = db));
  }

  createTable() {
    return new Promise((resolve, reject) => {
      this.dbInstance.executeSql('DROP TABLE if exists Messages;');
        this.dbInstance
          .executeSql(
            'CREATE TABLE Messages (' +
              'id INTEGER PRIMARY KEY AUTOINCREMENT ,' +
              'title TEXT ,' +
              'number TEXT ,' +
              'context TEXT ,' +
              'date TEXT );',
          )
          .then(val => {
            resolve(true);
          })
          .catch(error => {
            console.log(error);
            reject(false);
          });
      });
  }

  addTable(title, context, date, number) {
    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql(
          'INSERT INTO Messages (title, number, context, date)' +
            'VALUES ("' +
            title +
            '","' +
            number +
            '","' +
            context +
            '","' +
            date +
            '");',
        )
        .then(val => {
          resolve(true);
        })
        .catch(error => {
          console.log(error);
          reject(false);
        });
    });
  }

  getTable() {
    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql('SELECT * FROM Messages')
        .then(([values]) => {
          var array = [];
          for (let i = 0; i < values.rows.length; i++) {
            const element = values.rows.item(i);
            array.push(element);
          }
          resolve(array);
        })
        .catch(error => {
          console.log(error);
          reject(false);
        });
    });
  }

  dropTable(id) {
    return new Promise((resolve, reject) => {
      this.dbInstance
        .executeSql('DELETE FROM Messages WHERE id = ?', [id])
        .then(val => {
          resolve(true);
        })
        .catch(err => {
          reject(false);
        });
    });
  }
}
