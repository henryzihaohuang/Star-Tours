export const login = user => (
    $.ajax({
      method: 'POST',
      url: '/session',
      data: { user }
    })
  );
  
  export const signup = user => (
    $.ajax({
      method: 'POST',
      url: '/user',
      data: { user }
    })
  );
  
  export const logout = () => (
    $.ajax({
      method: 'DELETE',
      url: '/session'
    })
  );
  