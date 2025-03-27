class Employee {
  constructor({
    id,
    name,
    nik,
    gender,
    birthPlace,
    birthDate,
    phoneNumber,
    province,
    city,
    district,
    village,
    addressDetail,
    username,
    email,
    password,
    position,
    contractStartDate,
    contractEndDate,
    maritalStatus,
    bpjsCode,
    profilePhoto,
  }) {
    this.id = id;
    this.name = name;
    this.nik = nik;
    this.gender = gender;
    this.birthPlace = birthPlace;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.province = province;
    this.city = city;
    this.district = district;
    this.village = village;
    this.addressDetail = addressDetail;
    this.username = username;
    this.email = email;
    this.password = password;
    this.position = position;
    this.contractStartDate = contractStartDate;
    this.contractEndDate = contractEndDate;
    this.maritalStatus = maritalStatus;
    this.bpjsCode = bpjsCode;
    this.profilePhoto = profilePhoto;
  }
}

module.exports = Employee;
