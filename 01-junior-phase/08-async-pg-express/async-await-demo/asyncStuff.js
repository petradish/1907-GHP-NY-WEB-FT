const pretendDatabaseRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 0);
  });
};

const getAsyncStuff = async () => {
  console.log('starting async function');
  let result = await pretendDatabaseRequest();
  console.log('first call done');
  await pretendDatabaseRequest();
  console.log('second one done');
  console.log('finished async function: ', result);
};

const regularFunction = () => {
  console.log('running regularFunction');
}

regularFunction();
getAsyncStuff();
regularFunction();
