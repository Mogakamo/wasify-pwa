//session handler 
import session from 'express-session'
import connectMongo from 'connect-mongo'

const MongoStore = connectMongo(session)

export default function sessio(params) {
    
}