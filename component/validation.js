import validator from 'validator';

//Validate Email
export function validEmail(email)
{
    var _IsValid=true;

    if(!validator.isEmail(email))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate Password
export function validPassword(password)
{
    var _IsValid=true;
    var _exp="((?=.*[0-9])|(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,})";

    if(!password.match(_exp))
    {
        _IsValid=false;
    }

    return _IsValid;
}

//Validate Phone
export function validPhone(phone)
{
    var _IsValid=true;
    var _exp="[0-9]{10,10}";

    if(!phone.match(_exp))
    {
        _IsValid=false;
    }

    return _IsValid;
}

//Compare passoword and Confirm password are same
export function comparePassword(password,confirmpassword)
{
    var _IsValid=true;

    if(!validator.equals(password,confirmpassword))
    {
        _IsValid=false;
    }
    
    return _IsValid;
}

//Validate Fundraiser Type
export function validFundraiserType(type)
{
    var _IsValid=true;

    if(validator.isEmpty(type))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate Organization Name
export function validOrganization(organization)
{
    var _IsValid=true;

    if(!validator.isEmail(organization))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate First Name
export function validFirstName(firstname)
{
    var _IsValid=true;

    if(!validator.isAlpha(firstname))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate Last Name
export function validLastName(lastname)
{
    var _IsValid=true;

    if(!validator.isAlpha(lastname))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate street Name
export function validStreet(street)
{
    var _IsValid=true;

    if(validator.isEmpty(street))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate City
export function validCity(city)
{
    var _IsValid=true;

    if(validator.isEmpty(city))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate Country Code
export function validCountryCode(countrycode)
{
    var _IsValid=true;

    if(validator.isEmpty(countrycode))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate ZIP Code
export function validZIP(zip)
{
    var _IsValid=true;

    if(validator.isEmpty(zip))
    {
        _IsValid=false;
    }

     return _IsValid;
}

//Validate Uploaded File
export function validImage(file)
{
    var _IsValid=true;

    if(file==='')
    {
        _IsValid=false;
    }

    return _IsValid;
}