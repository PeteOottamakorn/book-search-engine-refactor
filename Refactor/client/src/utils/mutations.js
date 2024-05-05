import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($userId: String!, $savedBook: String!) {
        saveBook(userId: $userId, savedBook: $savedBook) {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($userId: String!, $savedBook: String!) {
        removeBook(userId: $userId, savedBook: $savedBook) {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
`;