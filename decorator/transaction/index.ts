interface IPayment {
  execute(): void;
}

class Payment implements IPayment {
  constructor(private amount: number) {}

  execute(): void {
    console.log(`Executing payment of ${this.amount} USD`);
  }
}

abstract class PaymentDecorator implements IPayment {
  constructor(protected payment: IPayment) {}
  execute(): void {
    this.payment.execute();
  }
}

class PaymentValidation extends PaymentDecorator {
  execute(): void {
    console.log('Payment validation completed successfully');
    this.payment.execute();
  }
}

class PaymentLogger extends PaymentDecorator {
  execute(): void {
    console.log('Payment execution started');
    this.payment.execute();
    console.log('Payment execution completed');
  }
}

class PaymentEmail extends PaymentDecorator {
  execute(): void {
    this.payment.execute();
    console.log('Payment email is sent to the client');
  }
}

class PaymentStore extends PaymentDecorator {
  execute(): void {
    this.payment.execute();
    console.log('Payment info is stored in DB');
  }
}

const payment = new Payment(10);
let decoratedPayment = new PaymentValidation(payment);
decoratedPayment = new PaymentLogger(decoratedPayment);
decoratedPayment = new PaymentEmail(decoratedPayment);
decoratedPayment = new PaymentStore(decoratedPayment);

decoratedPayment.execute();
