import { Moment } from 'moment';
import { IGroupes } from 'app/shared/model/groupes.model';

export interface INageur {
  id?: number;
  licence?: string;
  nom?: string;
  prenom?: string;
  date_naissance?: Moment;
  tel?: number;
  hauraire_etude?: string;
  groupes?: IGroupes;
}

export class Nageur implements INageur {
  constructor(
    public id?: number,
    public licence?: string,
    public nom?: string,
    public prenom?: string,
    public date_naissance?: Moment,
    public tel?: number,
    public hauraire_etude?: string,
    public groupes?: IGroupes
  ) {}
}
