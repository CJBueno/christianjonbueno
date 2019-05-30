const ctrl = require ('./../controllers/ctrl.js')

module.exports = (app) => {
    app.get('/', ctrl.index)
}