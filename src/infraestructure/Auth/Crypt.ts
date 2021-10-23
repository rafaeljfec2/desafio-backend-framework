import { ICrypt } from '@modules/entities/Auth/ICrypt';
import * as bcrypt from 'bcrypt';

export default class Crypt implements ICrypt {
  public async encrypt(value: any): Promise<string> {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(value, salt);
    return hash;
  }
  public async compare(data: any, encrypted: string): Promise<boolean> {
    if (await bcrypt.compare(data, encrypted)) {
      return true;
    }

    return false;
  }
}
