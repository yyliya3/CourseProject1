import '../App.css'
import React from 'react'

export default function LoginField() {
    const availableCharacters = '1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz_-'
    const [login, setLogin] = React.useState('')
    const [error, setError] = React.useState('')

    function onFocus() {
        validate(login)
        checkCorrect(login)
    }

    function CheckCorrect(login) {
        if (login === '') {
            this.setState({...this.state, correct: false})
            return
        }

        this.setState({...this.state, correct: true})
    }

    return (
        <FormControl variant='standard' margin='dense'>
            <TextField id='login' label='Логин' variant='standard' margin='dense'
                       required
                       value={login}
                       error={error !== ''}
                       helperText={error}
                       onChange={(e) => this.onChange(e)}
                       onFocus={onFocus}
                       onBlur={onFocus} />
        </FormControl>
    )
}