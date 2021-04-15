import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';
import { all } from '@/middlewares/index';
import { useCurrentUser } from '@/hooks/index';
import Posts from '@/components/post/posts';
import { extractUser } from '@/lib/api-helpers';
import { findUserById } from '@/db/index';
import { defaultProfilePicture } from '@/lib/default';

const UserPage = ({ user }) => {
    if (!user) return <Error statusCode={404} />

    const {
        name, email, profilePicture, _id
    } = user || {};
    
    const [currentUser] = useCurrentUser();
    const isCurrentUser = currentUser?._id === user.id;
    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            <div
        </>
    )
} 