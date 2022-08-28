import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'http://localhost:4300';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface User{
  _id?: string
  identity_id?: string;
  name?: string;
  surname?: string;
  phone?: string;
}
export namespace user {
  const BUCKET_ID = '6156efbb1c9cf3160b2c2f5a';
    export function get (...args: getArgs) {
      return Bucket.data.get<User>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User>(BUCKET_ID, ...args);
    };
    export function insert (document: User) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<User>
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<User>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<User>(BUCKET_ID, ...args);
      };
  }
}

export interface Vehicle{
  _id?: string
  name?: string;
}
export namespace vehicle {
  const BUCKET_ID = '6156efbb1c9cf3160b2c2f5d';
    export function get (...args: getArgs) {
      return Bucket.data.get<Vehicle>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Vehicle>(BUCKET_ID, ...args);
    };
    export function insert (document: Vehicle) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Vehicle) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Vehicle>
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Vehicle>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Vehicle>(BUCKET_ID, ...args);
      };
  }
}

export interface Courier{
  _id?: string
  name?: string;
  current_orders?: (Order | string)[];
  current_vehicle?: (Vehicle | string);
}
export namespace courier {
  const BUCKET_ID = '6156efbb1c9cf3160b2c2f60';
    export function get (...args: getArgs) {
      return Bucket.data.get<Courier>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Courier>(BUCKET_ID, ...args);
    };
    export function insert (document: Courier) {
      ['current_orders','current_vehicle'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Courier) {
      ['current_orders','current_vehicle'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Courier>
    ) {
      ['current_orders','current_vehicle'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Courier>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Courier>(BUCKET_ID, ...args);
      };
  }
}

export interface Ingredient{
  _id?: string
  name?: string;
  price?: number;
  stock?: number;
  unit?: string;
  calories?: number;
}
export namespace ingredient {
  const BUCKET_ID = '6156efbb1c9cf3160b2c2f64';
    export function get (...args: getArgs) {
      return Bucket.data.get<Ingredient>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Ingredient>(BUCKET_ID, ...args);
    };
    export function insert (document: Ingredient) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Ingredient) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Ingredient>
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Ingredient>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Ingredient>(BUCKET_ID, ...args);
      };
  }
}

export interface Rating{
  _id?: string
  user?: (User | string);
  rating?: (1|2|3|4|5);
  comment?: string;
}
export namespace rating {
  const BUCKET_ID = '6156efbb1c9cf3160b2c2f66';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rating>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rating>(BUCKET_ID, ...args);
    };
    export function insert (document: Rating) {
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rating) {
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rating>
    ) {
      ['user'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rating>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rating>(BUCKET_ID, ...args);
      };
  }
}

export interface Food{
  _id?: string
  name?: string;
  description?: string;
  image?: string;
  original_price?: number;
  is_available?: boolean;
  ratings?: (Rating | string)[];
  preparation_time?: number;
  extra_ingredients?: (Ingredient | string)[];
  removable_ingredients?: (Ingredient | string)[];
  calories?: number;
  ingredients?: (Ingredient | string)[];
  price?: number;
}
export namespace food {
  const BUCKET_ID = '6156efbc1c9cf3160b2c2f7c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Food>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Food>(BUCKET_ID, ...args);
    };
    export function insert (document: Food) {
      ['ratings','extra_ingredients','removable_ingredients','ingredients'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Food) {
      ['ratings','extra_ingredients','removable_ingredients','ingredients'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Food>
    ) {
      ['ratings','extra_ingredients','removable_ingredients','ingredients'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Food>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Food>(BUCKET_ID, ...args);
      };
  }
}

export interface Discount{
  _id?: string
  name?: string;
  foods?: (Food | string)[];
  from?: Date | string;
  until?: Date | string;
  discount?: number;
}
export namespace discount {
  const BUCKET_ID = '6156efbc1c9cf3160b2c2f7d';
    export function get (...args: getArgs) {
      return Bucket.data.get<Discount>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Discount>(BUCKET_ID, ...args);
    };
    export function insert (document: Discount) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Discount) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Discount>
    ) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Discount>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Discount>(BUCKET_ID, ...args);
      };
  }
}

export interface Category{
  _id?: string
  name?: string;
  foods?: (Food | string)[];
}
export namespace category {
  const BUCKET_ID = '6156efbe1c9cf3160b2c2f7e';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category>(BUCKET_ID, ...args);
    };
    export function insert (document: Category) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category>
    ) {
      ['foods'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category>(BUCKET_ID, ...args);
      };
  }
}

export interface Order{
  _id?: string
  delivery_location?: { type: "Point", coordinates: [number,number]};
  user?: (User | string);
  courier?: (Courier | string);
  created_at?: Date | string;
  status?: ('preparing'|'delivering'|'delivered'|'cancelled');
  price?: number;
  payment_method?: ('cash'|'credit_card'|'online');
  note?: string;
  foods?: {
  _id?: string;
  name?: string;
  ingredients?: string[];
  price?: number;
  count?: number;}[];
}
export namespace order {
  const BUCKET_ID = '6156efbe1c9cf3160b2c2f7f';
    export function get (...args: getArgs) {
      return Bucket.data.get<Order>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Order>(BUCKET_ID, ...args);
    };
    export function insert (document: Order) {
      ['user','courier'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Order) {
      ['user','courier'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Order>
    ) {
      ['user','courier'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Order>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Order>(BUCKET_ID, ...args);
      };
  }
}

export interface Address{
  _id?: string
  title?: string;
  location?: { type: "Point", coordinates: [number,number]};
}
export namespace address {
  const BUCKET_ID = '6156efbb1c9cf3160b2c2f57';
    export function get (...args: getArgs) {
      return Bucket.data.get<Address>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Address>(BUCKET_ID, ...args);
    };
    export function insert (document: Address) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Address) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Address>
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Address>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Address>(BUCKET_ID, ...args);
      };
  }
}