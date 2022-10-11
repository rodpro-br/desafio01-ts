export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      return;
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && value <= this.balance){
      this.balance -= value
      return;
    }

    throw new Error('Saldo insuficiente')
  }

  getBalance = (): void => {
    console.log('Saldo atual: ' + this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
