import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  users: any[] = [
    {
      _id: "1",
      name: "Kayne",
      surname: " Scott",
      phone: "123123",
      email: "kayne20",
      password: "12345",
    },
    {
      _id: "2",
      name: "Hareem",
      surname: "Curry",
      phone: "123123",
      email: "Hareem50",
      password: "54321",
    },

    {
      _id: "3",
      name: "",
      surname: "",
      phone: "",
      email: "",
      password: "",
    },
  ];

  constructor() {}

  find(username: string, password: string): Observable<any> {
    return of(
      this.users.find(
        (user) => user.email == username && user.password == password
      )
    );
  }

  get(userId: string): Observable<any> {
    return of(this.users.find((user) => user._id == userId));
  }

  update(updated: any) {
    this.users = this.users.map((user) => {
      if (user._id == updated._id) {
        return updated;
      } else {
        return user;
      }
    });
    return of(updated);
  }

  register(user: any) {
    user._id = (this.users.length + 1).toString();
    this.users.push(user);
  }
}
