import Challenge from "../models/challenge";

export const createCompetition = (request, response) => {
  try{
    const {type, message, initiator} = request.body
    const challenge = await Challenge.create({
      type, message, initiator
    });
  } catch(error){
    console.log(error)
  }
}
