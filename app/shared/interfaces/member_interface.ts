export interface MemberRequest {
  memberId: string
}

export interface Member {
  memberId: string;
  prefix: string;
  suffix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  knownName: string;
  gender: string;
  birthDate: string;
}
