import React, { useReducer, useState } from 'react'
import { TextField, Grid, Typography, Checkbox } from '@material-ui/core'
import { WhiteLink } from '../../elements'
import styled from 'styled-components'

const WhiteTextField = styled(TextField)`
.MuiInputBase-root {
    color: white
}
border: '1px solid #e2e2e1',
overflow: 'hidden',
borderRadius: 4,
backgroundColor: '#fcfcfb'
`

const initialState = {
  firstName: '',
  lastName: '',
  jobTitle: '',
  eMail: '',
  phoneNumber: '',
  country: '',
  message: '',
}

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  }
}

const DemoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInputChange = event => {
    dispatch({ field: event.target.name, value: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${state.firstName} ${state.lastName}!`)
  }
  const [checked, setChecked] = React.useState(true)

  const handleCheck = event => {
    setChecked(event.target.checked)
  }

  return (
    <form noValidate autoComplete="off">
      <Grid
        container
        spacing={3}
        alignItems="flex-end"
        justify="center"
        style={{ padding: 40 }}
      >
        <Typography variant="h4" style={{ paddingBottom: 40 }}>
          Check how TestWe works in a 30' meeting
        </Typography>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth={true}
            required
            id="FirstName"
            placeholder="First name"
            value={state.FirsttName}
            onChange={handleInputChange}
            color="primary"
            inputProps={{ color: 'white' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth={true}
            required
            id="FirstName"
            placeholder="Last name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            required
            id="FirstName"
            placeholder="Job Title"
            value={state.FirsttName}
            onChange={handleInputChange}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            required
            id="FirstName"
            placeholder="E-mail"
            value={state.FirsttName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            required
            id="FirstName"
            placeholder="Phone number"
            value={state.FirsttName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            required
            id="FirstName"
            placeholder="Country"
            value={state.FirsttName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <WhiteTextField
            fullWidth={true}
            placeholder="MultiLine with rows: 2 and rowsMax: 4"
            multiline
            rows={2}
            rowsMax={4}
          />
        </Grid>
        <Grid container item xs={12} justify="center">
          <WhiteLink onClick={handleSubmit}>Get my appointment! </WhiteLink>
        </Grid>
      </Grid>
    </form>
  )
}
export default DemoForm
