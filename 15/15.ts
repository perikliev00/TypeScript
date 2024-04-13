function delay(ms:number): Promise<void> {
    return new Promise<void>(resoleve => {
        setTimeout(()=> {
            resoleve();
        },ms);
    });
}
async function main() {
    console.log("Start");
    await delay(1000);
    console.log("End");
}
main();