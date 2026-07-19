require('dotenv').config();

const supabase = require('./supabase');

async function testConnection() {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .limit(1);

  console.log('DATA:', data);
  console.log('ERROR:', error);
}

testConnection();