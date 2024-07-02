'use client'
import LogRocket from 'logrocket'
import { THE_USER_ID_IN_YOUR_APP, THE_USER_SETTINGS } from '../.pga68_back/senscredential'

export const LogMa = () => {

    LogRocket.init('7pbor7/ownmlet')
    LogRocket.identify(THE_USER_ID_IN_YOUR_APP, THE_USER_SETTINGS);

    console.log('* * * * *\nTHE_USER_ID_IN_YOUR_APP = %o \nTHE_USER_SETTINGS = %o \n', THE_USER_ID_IN_YOUR_APP, THE_USER_SETTINGS)

}