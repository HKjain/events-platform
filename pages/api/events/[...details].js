import { connectToDatabase } from '../../../util/mongodb';
async function handler(req, res) {
  if (req.method === 'POST') {
    const [eventId, userId] = req.query.details;

    if (!eventId || !userId) {
      res.json({ message: 'Incomplete Details!' });
      return;
    }

    const { db } = await connectToDatabase();
    const exists = await db
      .collection('student_event')
      .findOne({ eventId: eventId, userId: userId });
    if (exists) {
      res.json({ message: 'Already Registered!' });
      return;
    }
    const newCombination = await db
      .collection('student_event')
      .insertOne({ eventId, userId });
    console.log(newCombination);
    res.send({ message: 'Registered Successfully!' });
    return;
  }
}

export default handler;
