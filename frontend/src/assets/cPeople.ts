import {User} from "../app/models/user";
import {Role} from "../app/models/role";


export const USERS: User[] = [
  {
    id: 1, username: 'Cello', firstName: 'Marcel', secondName: 'Rieder',
    pictureUrl:'../../assets/cutPicture.jpg',
    password: 'secret', zembuiTitle: 'CPO (Chief Programming/Playing Officer)',quote:'A Bier in da friah und da Tog ghert dia.',
    role: Role.Admin, token: undefined,
    volleyRole: {playing: true, drinking: false}
  }, {
    id: 2, username: 'Jonal', firstName: 'Jonas', secondName: 'Thenner',
    password: 'secret', zembuiTitle: 'CBO (Chief Business Officer)', role: Role.User, token: undefined,
    volleyRole: {playing: true, drinking: true}
  }, {
    id: 3, username: 'Gocki', firstName: 'Dominik', secondName: 'Paulhart',
    password: 'secret', zembuiTitle: 'CTO (Chief Training Officer)', role: Role.User, token: undefined,
    volleyRole: {playing: true, drinking: false}
  }, {
    id: 4, username: 'Moa', firstName: 'Moritz', secondName: 'Kölbl',
    password: 'secret', zembuiTitle: 'CRO (Chief of Rescue Operations)', role: Role.User, token: undefined,
    volleyRole: {playing: true, drinking: true}
  }, {
    id: 5, username: 'Al', firstName: 'Alex', secondName: 'Ernst',
    password: 'secret', zembuiTitle: 'CDO (Chief Drinking Officer)', role: Role.User, token: undefined,
    volleyRole: {playing: false, drinking: true}
  }
]
