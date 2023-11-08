"use strict";
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    execute() {
        console.log(`Executing payment of ${this.amount} USD`);
    }
}
class PaymentDecorator {
    constructor(payment) {
        this.payment = payment;
    }
    execute() {
        this.payment.execute();
    }
}
class PaymentValidation extends PaymentDecorator {
    execute() {
        console.log('Payment validation completed successfully');
        this.payment.execute();
    }
}
class PaymentLogger extends PaymentDecorator {
    execute() {
        console.log('Payment execution started');
        this.payment.execute();
        console.log('Payment execution completed');
    }
}
class PaymentEmail extends PaymentDecorator {
    execute() {
        this.payment.execute();
        console.log('Payment email is sent to the client');
    }
}
class PaymentStore extends PaymentDecorator {
    execute() {
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
