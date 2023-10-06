export interface Post {
    Categorie:   string;
    Description: string;
    Titre:       string;
    id:          number;
    post:        buffer;
    user_id:     number;
}

export interface buffer {
    data: string[];
    type: string;
}