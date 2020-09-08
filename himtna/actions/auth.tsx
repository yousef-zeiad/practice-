import localStorage from '../components/helpers/localSorage';

export const signup = (mobile_number, name, email, is_merchant, password, password_confirmation) => {
  return async dispatch => {
    const response = await fetch('http://67.205.144.192/api/v1/register', {
      method: "POST",
      headers: {
        'Contetn-Type': 'application/json'
      },
      body: JSON.stringify({
        mobile_number: mobile_number,
        name: name,
        email: email,
        is_merchant: is_merchant,
        password: password,
        password_confirmation: password_confirmation
      })
    })
    if (!response.ok) {
      throw new Error('check')
    }

    const responseData = await response.json();
    console.log(responseData, "resp")
    dispatch({ type: 'SIGNUP' })

  }
}

export const logout = ({ navigation }) => {
  //   client.resetStore();
  //   auth().signOut(); // todo @ahmad check if it logs out
  localStorage.remove('tokens');
  navigation.navigate('Auth');
  return {
    type: 'LOGOUT'
  }
};
