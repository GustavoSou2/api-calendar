export async function ResponseSnapShotQuery<T>(response: any): Promise<T[]> {
    const responseSnapshot: T[] = [] 
    await response.forEach((doc: any) => {
        responseSnapshot.push({
            uid: doc.id,
            ...doc.data()
        });
    })
    return <T[]> responseSnapshot;
}