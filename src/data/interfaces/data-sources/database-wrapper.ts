export interface IDatabaseWrapper {
    find(query: object): Promise<any[]>
    insertOne(doc: any): Promise<any>
    deleteOne(query: object): Promise<any>
}