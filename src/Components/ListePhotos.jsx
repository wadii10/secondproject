import React from 'react'

export const ListePhotos = () => {
    const list = [
        {
            source: "/images/téléchargement (1).jpg",
            alter: "waiting..."
        },
        {
            source: "/images/téléchargement (2).jpg",
            alter: "waiting..."
        },
        {
            source: "/images/téléchargement (3).jpg",
            alter: "waiting..."
        },
        {
            source: "/images/téléchargement (4).jpg",
            alter: "waiting..."
        }
    ];

    return (
        <div>
            {
                list.map(ph => <div className='list-hor'>
                    <img src={ph.source} alt={ph.alter} style={{ width: '50%' }} />
                    <div className="containere">
                        <h6><b>Public Photo</b></h6>
                    </div>
                </div>)
            }
        </div>
    )
}
