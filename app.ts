import { SpecialAccount } from './class/SpecialAccount';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Rodrigo', 10)
console.log(peopleAccount.getName())
peopleAccount.getBalance()
peopleAccount.deposit(100)
peopleAccount.getBalance()
peopleAccount.withdraw(30)
peopleAccount.getBalance()


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName())
companyAccount.getBalance()
companyAccount.deposit(200)
companyAccount.getBalance()
companyAccount.getLoan(50)
companyAccount.getBalance()
companyAccount.withdraw(40)
companyAccount.getBalance()

const specialAccount: SpecialAccount = new SpecialAccount('Juliana - Especial', 30)
console.log(specialAccount.getName())
specialAccount.getBalance()
specialAccount.deposit(150)
specialAccount.getBalance()
specialAccount.withdraw(80)
specialAccount.getBalance()
