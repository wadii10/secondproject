import React from 'react'

export const ListePhotos = () => {
    const list = [
        {
            source:"/images/téléchargement (1).jpg",
            alter:"waiting..."
        },
        {
            source:"/images/téléchargement (2).jpg",
            alter:"waiting..."
        },
        {
            source:"/images/téléchargement (3).jpg",
            alter:"waiting..."
        },
        {
            source:"/images/téléchargement (4).jpg",
            alter:"waiting..."
        }
    ];

    return (
        <div>
            {
            list.map(ph => <div>
                <img src={ph.source} alt={ph.alter} />
            </div>)
            }
        </div>
    )
}
