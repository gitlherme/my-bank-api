import fs from 'fs'
const database = JSON.parse(fs.readFileSync('database/accounts.json', 'utf8'))


function generateAccountNumber() {
    return database.accounts.length+1
}

export default class AccountController {
  async store(req, res) {
    const account = { id: generateAccountNumber(), ...req.body }
    try {
      database.accounts.push(account)
      fs.writeFileSync('database/accounts.json', JSON.stringify(database))
      res.sendStatus(201)
    } catch {
      res.sendStatus(500)
    }
  }
  async show(req, res) {
    const account = database.accounts.find(account => account.id === parseInt(req.params.id))
    if (account) {
      res.send({ balance : account.balance })
    } else {
      res.sendStatus(404)
    }
  }
  async deposit(req, res) {
    const account = database.accounts.find(account => account.id === parseInt(req.params.id))
    if (account) {
      account.balance += parseInt(req.body.amount)
      fs.writeFileSync('database/accounts.json', JSON.stringify(database))
      res.send({ balance : account.balance })
    } else {
      res.sendStatus(404)
    }
  }
  async withdraw(req, res) {
    const account = database.accounts.find(account => account.id === parseInt(req.params.id))
    if (account) {
      if (parseInt(req.body.amount) <= account.balance) {
        account.balance -= parseInt(req.body.amount)
        fs.writeFileSync('database/accounts.json', JSON.stringify(database))
        res.send({ balance : account.balance })
      } else {
        res.status(400).send({ error: 'Insufficient funds' })

      }
    } else {
      res.sendStatus(404)
    }
  }
  async destroy(req, res) {
    const account = database.accounts.find(account => account.id === parseInt(req.params.id))
    if (account) {
      database.accounts = database.accounts.filter(account => account.id !== parseInt(req.params.id))
      fs.writeFileSync('database/accounts.json', JSON.stringify(database))
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  }

}