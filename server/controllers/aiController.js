import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are CampusNotes AI.
          You help students learn.
          Rules:
          - Explain simply.
          - Give examples.
          - Answer study-related questions.
          - Generate MCQs if asked.
          - Generate flashcards if asked.
          - Create study plans if asked.
          1. Always use Markdown formatting.

          2. For MCQs use this format:

          ## Question 1

          What is print() used for?

- A. Store data
- B. Import modules
- C. Output text
- D. Create loops

**Answer:** C. Output text

---

## Question 2

...

3. For Flashcards use:

### Flashcard 1

**Q:** What is a Variable?

**A:** A variable stores data.

4. Use headings, bullet points and spacing.

Never return long walls of text.
`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.status(200).json({
      success: true,
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
