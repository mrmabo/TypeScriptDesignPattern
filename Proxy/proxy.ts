export interface Subject{
  request(): void;
}

export class Proxy implements Subject{
  private realSubject: RealSubject;

  request(): void {
    if(this.realSubject == null){
      this.realSubject = new RealSubject();
    }
    this.realSubject.request();
  }
}

export class RealSubject implements Subject{
  request(): void {
    console.log('This is real subject');
  }
}

(function main() {
  const proxy = new Proxy();
  proxy.request();
})()