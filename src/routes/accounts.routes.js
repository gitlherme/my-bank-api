import AccountController from '../Controllers/AccountController.js'
import express from 'express'
const router = express.Router()
const accountController = new AccountController()

router.post('/', accountController.store)
router.get('/:id', accountController.show)
router.patch('/deposit/:id', accountController.deposit)
router.patch('/withdraw/:id', accountController.withdraw)
router.delete('/:id', accountController.destroy)

export default router