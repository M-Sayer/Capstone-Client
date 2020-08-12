import React from 'react'

const UserContext = React.createContext({
  userLists: [],
  userRecipes: [],
  error: null,
  setUserLists: () => {},
  setUserRecipes: () => {},
  setError: () => {},
  clearError: () => {},
  setLoggedIn: () => {},
  isLoggedIn: false 
})

export default UserContext

export class UserProvider extends React.Component {
  state = {
    userLists: [],
    userRecipes: [],
    error: null,
    isLoggedIn: false,
  }

  setLoggedIn = (boolean) => {
    this.setState({ isLoggedIn: boolean })
  }

  setUserLists = (userLists) => {
    this.setState({ userLists })
  }

  setUserRecipes = (userRecipes) => {
    this.setState({ userRecipes })
  }

  setError = (error) => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      userLists: this.state.userLists,
      setUserLists: this.setUserLists,
      userRecipes: this.state.userRecipes,
      setUserRecipes: this.setUserRecipes,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLoggedIn: this.setLoggedIn,
      isLoggedIn: this.state.isLoggedIn,
    }

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }


}