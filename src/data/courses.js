import { Calculator, Globe2, Languages, Microscope, Monitor, WalletCards } from 'lucide-react'

export const courses = [
  {
    id: 'english-basics',
    title: 'English Basics',
    description:
      'Build reading confidence with short stories, useful vocabulary, and easy sentence patterns.',
    category: 'Language',
    level: 'Beginner',
    duration: '5 lessons',
    icon: Languages,
    tone: 'bg-palette-pink/55 text-navy',
    searchTerms: ['reading', 'vocabulary', 'stories', 'sentence', 'english'],
    lessons: [
      {
        id: 'welcome-goals',
        title: 'Welcome and goals',
        duration: '5 min',
        summary: 'Learn how short, repeatable study sessions help you stay steady.',
        keywords: ['goal', 'habit', 'small steps'],
        viewerTitle: 'Start with calm, repeatable study habits',
        viewerParagraphs: [
          'PathshalaX lessons are designed for small study moments. You do not need long hours to make progress.',
          'A clear goal for one lesson helps you notice what matters and stop when your mind feels full.',
        ],
        example: 'Example goal: "I will read one short paragraph and learn two new words today."',
        practicePrompt: 'Write one simple goal for this week in your notebook.',
        notes: [
          { type: 'heading', text: 'Why small goals work' },
          {
            type: 'paragraph',
            text: 'A short goal feels easier to begin, and easy beginnings help habits last longer.',
          },
          {
            type: 'bullet-list',
            items: [
              'Choose one clear target for today.',
              'Stop after a focused short session.',
              'Return tomorrow instead of waiting for a perfect day.',
            ],
          },
          {
            type: 'highlight',
            label: 'Remember',
            text: 'Steady study beats one long session that is hard to repeat.',
          },
          { type: 'keywords', items: ['goal', 'routine', 'repeat'] },
        ],
      },
      {
        id: 'reading-simple-stories',
        title: 'Reading simple stories',
        duration: '12 min',
        summary: 'Read once for meaning and a second time for details and sentence patterns.',
        keywords: ['story', 'meaning', 'details'],
        viewerTitle: 'Two reads help understanding grow',
        viewerParagraphs: [
          'On the first read, focus on the main idea. Ask yourself who, where, and what happened.',
          'On the second read, slow down. Notice repeated words, simple verbs, and how sentences connect.',
        ],
        example:
          'Short story line: "Amina walks to school early. She carries a red bag and smiles at her friend."',
        practicePrompt: 'Read the example twice and say the main idea in one sentence.',
        notes: [
          { type: 'heading', text: 'Read for meaning first' },
          {
            type: 'paragraph',
            text: 'You do not need to understand every word before you understand the message.',
          },
          {
            type: 'bullet-list',
            items: [
              'First read: find the big idea.',
              'Second read: notice new words.',
              'Third quick look: check sentence order.',
            ],
          },
          {
            type: 'highlight',
            label: 'Try this',
            text: 'Circle one sentence that clearly shows the main idea of the story.',
          },
          { type: 'keywords', items: ['main idea', 'detail', 'sentence'] },
        ],
      },
      {
        id: 'new-words-context',
        title: 'New words in context',
        duration: '10 min',
        summary: 'Use nearby words in a sentence to guess meaning before checking a definition.',
        keywords: ['context', 'vocabulary', 'guess meaning'],
        viewerTitle: 'Context gives clues',
        viewerParagraphs: [
          'Words around a new term often tell you if it is a place, feeling, action, or object.',
          'Guessing from context trains your brain to read without stopping every minute.',
        ],
        example:
          'Sentence: "The path was narrow, so only one child could walk on it at a time." Narrow likely means not wide.',
        practicePrompt: 'Choose one new word today and explain which nearby words helped you guess it.',
        notes: [
          { type: 'heading', text: 'Look around the new word' },
          {
            type: 'paragraph',
            text: 'Context clues can come before or after the word you do not know.',
          },
          {
            type: 'bullet-list',
            items: [
              'Notice the full sentence.',
              'Check if the word describes an action, object, or feeling.',
              'Test your guess by rereading the sentence.',
            ],
          },
          {
            type: 'highlight',
            label: 'Helpful clue',
            text: 'A good guess is enough for first reading. You can confirm the exact meaning later.',
          },
          { type: 'keywords', items: ['context', 'clue', 'guess'] },
        ],
      },
      {
        id: 'short-practice',
        title: 'Short practice',
        duration: '8 min',
        summary: 'Turn new vocabulary into memory by speaking and writing with it.',
        keywords: ['practice', 'sentence', 'review'],
        viewerTitle: 'Use new words quickly',
        viewerParagraphs: [
          'A word stays longer in memory when you say it, hear it, and write it.',
          'Short practice works best when it happens right after reading.',
        ],
        example:
          'New word: "careful". Practice sentence: "Ravi is careful when he crosses the road."',
        practicePrompt: 'Write two new words and make one simple sentence for each.',
        notes: [
          { type: 'heading', text: 'Practice in small steps' },
          {
            type: 'paragraph',
            text: 'You do not need many sentences. Two honest examples are better than ten rushed ones.',
          },
          {
            type: 'bullet-list',
            items: [
              'Say the word aloud.',
              'Write one true sentence.',
              'Review the sentence tomorrow.',
            ],
          },
          {
            type: 'highlight',
            label: 'Keyword focus',
            text: 'Simple sentences are good learning tools. Clarity matters more than complexity.',
          },
          { type: 'keywords', items: ['practice', 'memory', 'review'] },
        ],
      },
      {
        id: 'review-notes',
        title: 'Review notes',
        duration: '6 min',
        summary: 'Review your key points so the lesson stays fresh and usable.',
        keywords: ['review', 'notes', 'summary'],
        viewerTitle: 'Review closes the lesson',
        viewerParagraphs: [
          'A quick review at the end helps your brain sort the most useful ideas.',
          'Simple notes are easier to reread when your internet is slow or your time is short.',
        ],
        example: 'Sample summary: "Read twice, guess meaning from context, and use new words in short sentences."',
        practicePrompt: 'Summarize today’s lesson in three bullet points.',
        notes: [
          { type: 'heading', text: 'Keep notes simple' },
          {
            type: 'paragraph',
            text: 'Good notes are short enough to revisit and clear enough to trust later.',
          },
          {
            type: 'bullet-list',
            items: [
              'Write the main idea.',
              'List two useful new words.',
              'Add one action for tomorrow.',
            ],
          },
          {
            type: 'highlight',
            label: 'Study tip',
            text: 'Reviewing for two minutes tomorrow is easier when your notes already feel organized.',
          },
          { type: 'keywords', items: ['summary', 'main idea', 'tomorrow'] },
        ],
      },
    ],
    quiz: {
      title: 'English Basics Quiz',
      description: 'Check whether you can use steady reading habits and simple vocabulary practice.',
      questions: [
        {
          id: 'habit',
          prompt: 'Which habit supports steady learning?',
          options: ['Small daily practice', 'Skipping reviews', 'Rushing lessons', 'Studying only once'],
          correctAnswer: 'Small daily practice',
          feedback: {
            correct: 'Correct. Small sessions are easier to repeat and build confidence over time.',
            incorrect: 'Try again next round. A small daily habit is usually easier to keep than one long session.',
          },
        },
        {
          id: 'first-read',
          prompt: 'What should you focus on during the first read of a short story?',
          options: ['The main idea', 'Every grammar rule', 'Perfect pronunciation', 'Only difficult words'],
          correctAnswer: 'The main idea',
          feedback: {
            correct: 'Correct. Start with the big meaning before worrying about every detail.',
            incorrect: 'The first read is for overall meaning. Details can come later.',
          },
        },
        {
          id: 'context',
          prompt: 'What helps you guess the meaning of a new word?',
          options: ['Nearby words in the sentence', 'Ignoring the sentence', 'Reading faster', 'Changing the story'],
          correctAnswer: 'Nearby words in the sentence',
          feedback: {
            correct: 'Correct. Context clues often tell you how a new word is being used.',
            incorrect: 'Look at the words around the new term. Context often gives the strongest clue.',
          },
        },
        {
          id: 'practice',
          prompt: 'What should you do after learning a new word?',
          options: ['Use it in a sentence', 'Close the lesson at once', 'Forget it for a week', 'Wait for a test'],
          correctAnswer: 'Use it in a sentence',
          feedback: {
            correct: 'Correct. Using a word helps it move from recognition into memory.',
            incorrect: 'Using a new word right away is one of the simplest ways to remember it.',
          },
        },
      ],
    },
  },
  {
    id: 'math-foundations',
    title: 'Math Foundations',
    description:
      'Practice number sense, simple operations, and patient problem-solving with step-by-step examples.',
    category: 'Mathematics',
    level: 'Beginner',
    duration: '5 lessons',
    icon: Calculator,
    tone: 'bg-palette-blue/70 text-navy',
    searchTerms: ['math', 'numbers', 'addition', 'fractions', 'counting'],
    lessons: [
      {
        id: 'counting-patterns',
        title: 'Counting patterns',
        duration: '7 min',
        summary: 'Notice repeated jumps in numbers so counting feels less random.',
        keywords: ['pattern', 'counting', 'sequence'],
        viewerTitle: 'Patterns reduce mental load',
        viewerParagraphs: [
          'Counting by 2s, 5s, or 10s teaches your eyes to expect the next number.',
          'A number pattern is a rule you can reuse, which is helpful for quick daily math.',
        ],
        example: 'Pattern example: 5, 10, 15, 20. The rule is add 5 each time.',
        practicePrompt: 'Continue this pattern: 3, 6, 9, __, __.',
        notes: [
          { type: 'heading', text: 'Find the repeated change' },
          {
            type: 'paragraph',
            text: 'A pattern becomes clear when you compare one number to the next.',
          },
          {
            type: 'bullet-list',
            items: [
              'Check how much the number changes.',
              'Say the rule aloud.',
              'Test the rule on the next step.',
            ],
          },
          {
            type: 'highlight',
            label: 'Quick check',
            text: 'If the rule works twice in a row, you are probably on the right path.',
          },
          { type: 'keywords', items: ['rule', 'next number', 'repeat'] },
        ],
      },
      {
        id: 'addition-everyday',
        title: 'Addition in everyday life',
        duration: '10 min',
        summary: 'Connect addition to shopping, sharing, and counting objects around you.',
        keywords: ['addition', 'total', 'everyday math'],
        viewerTitle: 'Addition tells us the total',
        viewerParagraphs: [
          'When two groups come together, addition helps you count the full amount.',
          'Real situations like money, pencils, or cups make the idea easier to trust.',
        ],
        example: 'If you have 4 bananas and get 3 more, you now have 7 bananas.',
        practicePrompt: 'Create one addition example from your own home or classroom.',
        notes: [
          { type: 'heading', text: 'Add what comes together' },
          {
            type: 'paragraph',
            text: 'Addition often answers questions that begin with "How many in all?"',
          },
          {
            type: 'bullet-list',
            items: ['Count the first group.', 'Count the second group.', 'Combine the groups for the total.'],
          },
          {
            type: 'highlight',
            label: 'Language clue',
            text: 'Words like total, together, and all can signal addition.',
          },
          { type: 'keywords', items: ['total', 'together', 'sum'] },
        ],
      },
      {
        id: 'subtraction-steps',
        title: 'Subtraction steps',
        duration: '9 min',
        summary: 'Use simple steps to see what is left after taking away.',
        keywords: ['subtraction', 'difference', 'left'],
        viewerTitle: 'Subtraction shows what remains',
        viewerParagraphs: [
          'Subtraction helps when items leave a group or when you compare two amounts.',
          'Moving slowly through each step reduces mistakes and keeps the numbers clear.',
        ],
        example: 'You have 9 pencils and give away 2. You have 7 pencils left.',
        practicePrompt: 'Solve: 12 - 5. Say what the answer means in words.',
        notes: [
          { type: 'heading', text: 'Take away with care' },
          {
            type: 'paragraph',
            text: 'Subtraction becomes easier when you picture the starting amount first.',
          },
          {
            type: 'bullet-list',
            items: [
              'Find the full amount.',
              'Take away the smaller amount.',
              'Count what is left.',
            ],
          },
          {
            type: 'highlight',
            label: 'Helpful words',
            text: 'Left, remain, and fewer often point to subtraction.',
          },
          { type: 'keywords', items: ['take away', 'remain', 'difference'] },
        ],
      },
      {
        id: 'fractions-basics',
        title: 'Fractions basics',
        duration: '11 min',
        summary: 'Understand simple fractions as equal parts of one whole item.',
        keywords: ['fraction', 'half', 'whole'],
        viewerTitle: 'Fractions describe parts of a whole',
        viewerParagraphs: [
          'A fraction only makes sense when the whole has been split into equal parts.',
          'Common examples like half a roti or one quarter of a pizza make fractions easier to picture.',
        ],
        example: 'If one chapati is split into 2 equal pieces, one piece is one-half.',
        practicePrompt: 'Draw one circle and divide it into 4 equal parts. Shade 1 part.',
        notes: [
          { type: 'heading', text: 'Equal parts matter' },
          {
            type: 'paragraph',
            text: 'If the pieces are not equal, the fraction does not describe them clearly.',
          },
          {
            type: 'bullet-list',
            items: [
              'Name the whole item first.',
              'Check that the parts are equal.',
              'Count how many parts you are talking about.',
            ],
          },
          {
            type: 'highlight',
            label: 'Key idea',
            text: 'A half means 1 out of 2 equal parts, not just any 2 pieces.',
          },
          { type: 'keywords', items: ['equal', 'whole', 'part'] },
        ],
      },
      {
        id: 'review-problem-solving',
        title: 'Review and problem solving',
        duration: '6 min',
        summary: 'Use keywords and steps to decide whether to add, subtract, or describe parts.',
        keywords: ['review', 'problem solving', 'keywords'],
        viewerTitle: 'Choose the right math tool',
        viewerParagraphs: [
          'The question itself gives clues about which operation you need.',
          'Reading slowly helps you avoid solving the wrong problem with the right numbers.',
        ],
        example: 'Question: "Rita had 8 flowers. She gave 3 away. How many are left?" This is subtraction.',
        practicePrompt: 'Read one word problem and underline the clue words before solving it.',
        notes: [
          { type: 'heading', text: 'Pause before solving' },
          {
            type: 'paragraph',
            text: 'A short pause to identify the math action can save time and prevent confusion.',
          },
          {
            type: 'bullet-list',
            items: [
              'Read the full question.',
              'Underline clue words.',
              'Pick the operation that matches the action.',
            ],
          },
          {
            type: 'highlight',
            label: 'Smart habit',
            text: 'If a problem feels confusing, rewrite it in simpler words before solving.',
          },
          { type: 'keywords', items: ['operation', 'clue word', 'solve'] },
        ],
      },
    ],
    quiz: {
      title: 'Math Foundations Quiz',
      description: 'Practice choosing the correct math action with simple, everyday questions.',
      questions: [
        {
          id: 'pattern',
          prompt: 'What is the rule in the pattern 5, 10, 15, 20?',
          options: ['Add 5 each time', 'Subtract 5 each time', 'Add 10 each time', 'Double each number'],
          correctAnswer: 'Add 5 each time',
          feedback: {
            correct: 'Correct. Each step increases by 5.',
            incorrect: 'Look at the change between each pair of numbers. The jump is 5.',
          },
        },
        {
          id: 'addition',
          prompt: 'Which question is best solved with addition?',
          options: [
            'How many in all?',
            'How many are left?',
            'What is one-half?',
            'Which number is smaller?',
          ],
          correctAnswer: 'How many in all?',
          feedback: {
            correct: 'Correct. Addition combines groups to find the total.',
            incorrect: 'Addition usually answers questions about the total amount together.',
          },
        },
        {
          id: 'subtraction',
          prompt: 'What does subtraction usually show?',
          options: ['What is left', 'What is equal', 'What comes next in a story', 'How to draw a shape'],
          correctAnswer: 'What is left',
          feedback: {
            correct: 'Correct. Subtraction often tells us the amount remaining.',
            incorrect: 'Think about taking away from a group. Subtraction tells what remains.',
          },
        },
        {
          id: 'fraction',
          prompt: 'A fraction makes sense when the whole is split into what kind of parts?',
          options: ['Equal parts', 'Random parts', 'Large parts only', 'Colored parts'],
          correctAnswer: 'Equal parts',
          feedback: {
            correct: 'Correct. Fractions describe equal parts of one whole.',
            incorrect: 'Fractions require equal parts, otherwise the comparison is unfair.',
          },
        },
      ],
    },
  },
  {
    id: 'science-around-us',
    title: 'Science Around Us',
    description:
      'Explore everyday science through observation, simple questions, and familiar examples.',
    category: 'Science',
    level: 'Beginner',
    duration: '5 lessons',
    icon: Microscope,
    tone: 'bg-palette-green/70 text-navy',
    searchTerms: ['science', 'observation', 'plants', 'light', 'matter'],
    lessons: [
      {
        id: 'observe-world',
        title: 'Observe the world',
        duration: '6 min',
        summary: 'Science begins with noticing what you can see, hear, and compare.',
        keywords: ['observe', 'question', 'notice'],
        viewerTitle: 'Observation comes before explanation',
        viewerParagraphs: [
          'Scientists start by noticing details. They look carefully before deciding what something means.',
          'You can practice science anywhere by asking simple questions about everyday events.',
        ],
        example: 'Observation: "The metal spoon feels colder than the wooden spoon."',
        practicePrompt: 'Observe one object for one minute and list three details about it.',
        notes: [
          { type: 'heading', text: 'Use your senses carefully' },
          {
            type: 'paragraph',
            text: 'Seeing and comparing are strong first steps in science learning.',
          },
          {
            type: 'bullet-list',
            items: ['Look closely.', 'Describe what you notice.', 'Ask one curious question.'],
          },
          {
            type: 'highlight',
            label: 'Science habit',
            text: 'Good observation is simple, specific, and based on what you actually notice.',
          },
          { type: 'keywords', items: ['detail', 'sense', 'question'] },
        ],
      },
      {
        id: 'solids-liquids-gases',
        title: 'Solids, liquids, and gases',
        duration: '10 min',
        summary: 'Compare how common materials keep shape, flow, or spread in space.',
        keywords: ['solid', 'liquid', 'gas'],
        viewerTitle: 'Matter behaves in different ways',
        viewerParagraphs: [
          'A solid keeps its shape, a liquid takes the shape of its container, and a gas spreads out.',
          'Using real objects helps you connect these ideas to daily life quickly.',
        ],
        example: 'Ice is a solid, water is a liquid, and steam is a gas.',
        practicePrompt: 'Name one solid, one liquid, and one gas that you know.',
        notes: [
          { type: 'heading', text: 'Notice shape and movement' },
          {
            type: 'paragraph',
            text: 'The way matter behaves helps us sort it into simple groups.',
          },
          {
            type: 'bullet-list',
            items: [
              'Solid: keeps shape.',
              'Liquid: flows and fills the bottom of a container.',
              'Gas: spreads into the space around it.',
            ],
          },
          {
            type: 'highlight',
            label: 'Everyday science',
            text: 'Water can help you remember all three states because it can appear as ice, liquid water, or steam.',
          },
          { type: 'keywords', items: ['shape', 'flow', 'space'] },
        ],
      },
      {
        id: 'plants-need',
        title: 'What plants need',
        duration: '9 min',
        summary: 'Learn the basic needs that help plants grow and stay healthy.',
        keywords: ['plant', 'sunlight', 'water'],
        viewerTitle: 'Plants have needs too',
        viewerParagraphs: [
          'Plants need sunlight, water, air, and suitable soil to grow well.',
          'When one need is missing, the plant often changes color, shape, or speed of growth.',
        ],
        example: 'A plant kept in a dark room may grow weak and pale.',
        practicePrompt: 'Check a nearby plant and name one thing helping it grow.',
        notes: [
          { type: 'heading', text: 'Growth needs support' },
          {
            type: 'paragraph',
            text: 'Healthy growth usually depends on more than one condition at the same time.',
          },
          {
            type: 'bullet-list',
            items: ['Sunlight helps make food.', 'Water carries nutrients.', 'Air and soil support living processes.'],
          },
          {
            type: 'highlight',
            label: 'Observe change',
            text: 'Leaves often show stress early, so they are useful places to look first.',
          },
          { type: 'keywords', items: ['sunlight', 'water', 'soil'] },
        ],
      },
      {
        id: 'light-shadow',
        title: 'Light and shadow',
        duration: '8 min',
        summary: 'See how light travels and how shadows form when something blocks it.',
        keywords: ['light', 'shadow', 'block'],
        viewerTitle: 'Shadows show where light cannot pass',
        viewerParagraphs: [
          'Light usually travels in straight lines. A shadow appears when an object blocks that light.',
          'Changing the position of the light source changes the size and direction of the shadow.',
        ],
        example: 'A torch close to your hand can make the shadow appear larger on a wall.',
        practicePrompt: 'Use a torch or lamp and move an object closer and farther from the wall.',
        notes: [
          { type: 'heading', text: 'Block the light, create a shadow' },
          {
            type: 'paragraph',
            text: 'Shadows help us understand where the light source is and how objects are placed.',
          },
          {
            type: 'bullet-list',
            items: ['Find the light source.', 'Notice the object blocking the light.', 'Observe the shadow shape.'],
          },
          {
            type: 'highlight',
            label: 'Try comparing',
            text: 'The same object can make different shadows when the light moves.',
          },
          { type: 'keywords', items: ['source', 'block', 'shape'] },
        ],
      },
      {
        id: 'science-review',
        title: 'Quick science review',
        duration: '5 min',
        summary: 'Review key ideas so observation and simple explanations feel connected.',
        keywords: ['review', 'science habits', 'summary'],
        viewerTitle: 'Pull the ideas together',
        viewerParagraphs: [
          'A short review helps you remember the core idea from each lesson instead of many loose facts.',
          'Science learning grows stronger when you connect observation to explanation.',
        ],
        example: 'Review statement: "I observed the change, named the pattern, and then explained it."',
        practicePrompt: 'Write one thing you observed this week and explain it in one sentence.',
        notes: [
          { type: 'heading', text: 'Connect seeing to thinking' },
          {
            type: 'paragraph',
            text: 'Good review notes help you move from observation to explanation without confusion.',
          },
          {
            type: 'bullet-list',
            items: ['What did I notice?', 'What pattern did I see?', 'What simple explanation fits?'],
          },
          {
            type: 'highlight',
            label: 'Review habit',
            text: 'A small science notebook can become a powerful tool even without internet access.',
          },
          { type: 'keywords', items: ['observe', 'explain', 'review'] },
        ],
      },
    ],
    quiz: {
      title: 'Science Around Us Quiz',
      description: 'Use observation and simple scientific ideas to answer everyday questions.',
      questions: [
        {
          id: 'observation',
          prompt: 'What usually comes first in science learning?',
          options: ['Observation', 'Memorizing long answers', 'Guessing quickly', 'Skipping details'],
          correctAnswer: 'Observation',
          feedback: {
            correct: 'Correct. Science often begins by noticing details carefully.',
            incorrect: 'Observation is the usual first step because it gives you real details to work with.',
          },
        },
        {
          id: 'matter',
          prompt: 'Which material takes the shape of its container?',
          options: ['Liquid', 'Solid', 'Gas only in a balloon', 'Rock'],
          correctAnswer: 'Liquid',
          feedback: {
            correct: 'Correct. A liquid flows and takes the shape of its container.',
            incorrect: 'A liquid changes shape to fit its container, while a solid keeps its own shape.',
          },
        },
        {
          id: 'plants',
          prompt: 'Which of these helps a plant grow?',
          options: ['Sunlight', 'Plastic toys', 'Noise', 'Darkness only'],
          correctAnswer: 'Sunlight',
          feedback: {
            correct: 'Correct. Plants use sunlight as part of making their food.',
            incorrect: 'Plants need things like sunlight and water, not toys or constant darkness.',
          },
        },
        {
          id: 'shadow',
          prompt: 'When does a shadow form?',
          options: ['When an object blocks light', 'When water boils', 'When a plant grows', 'When a number pattern repeats'],
          correctAnswer: 'When an object blocks light',
          feedback: {
            correct: 'Correct. A shadow appears where light cannot pass through.',
            incorrect: 'A shadow forms when something blocks the path of light.',
          },
        },
      ],
    },
  },
  {
    id: 'world-cultures',
    title: 'World Cultures',
    description:
      'Explore traditions, places, and respectful communication through familiar cultural examples.',
    category: 'Social Studies',
    level: 'Beginner',
    duration: '5 lessons',
    icon: Globe2,
    tone: 'bg-palette-blue/35 text-navy',
    searchTerms: ['culture', 'festival', 'map', 'respect', 'community'],
    lessons: [
      {
        id: 'local-customs',
        title: 'Local customs',
        duration: '6 min',
        summary: 'See how everyday habits and greetings can vary from one community to another.',
        keywords: ['custom', 'greeting', 'community'],
        viewerTitle: 'Customs show how communities live',
        viewerParagraphs: [
          'A custom is a common way people greet, celebrate, or behave in daily life.',
          'Learning about customs helps us notice difference without treating it as a problem.',
        ],
        example: 'Some people greet with a handshake, while others greet with folded hands or a bow.',
        practicePrompt: 'Describe one respectful greeting from your own community.',
        notes: [
          { type: 'heading', text: 'Customs can be everyday actions' },
          {
            type: 'paragraph',
            text: 'Not every cultural practice is part of a large festival. Many live inside normal daily routines.',
          },
          {
            type: 'bullet-list',
            items: ['How people greet', 'How people share meals', 'How people show respect'],
          },
          {
            type: 'highlight',
            label: 'Respectful mindset',
            text: 'Difference does not mean wrong. It often means local history and local meaning.',
          },
          { type: 'keywords', items: ['greet', 'routine', 'respect'] },
        ],
      },
      {
        id: 'food-festivals',
        title: 'Food and festivals',
        duration: '10 min',
        summary: 'Connect special foods and celebrations to memory, place, and community.',
        keywords: ['food', 'festival', 'celebration'],
        viewerTitle: 'Festivals often bring food, memory, and meaning together',
        viewerParagraphs: [
          'Food can carry memory. A dish may remind people of family, harvest seasons, or religious events.',
          'Festivals often combine music, clothing, gathering, and food into one shared experience.',
        ],
        example: 'A festive sweet dish may appear only during one season, making it feel special.',
        practicePrompt: 'Name one food linked with a celebration you know.',
        notes: [
          { type: 'heading', text: 'Food tells stories too' },
          {
            type: 'paragraph',
            text: 'A dish can teach us about climate, history, ingredients, and family traditions.',
          },
          {
            type: 'bullet-list',
            items: [
              'What ingredients are common?',
              'When is the food prepared?',
              'Who shares it and why?',
            ],
          },
          {
            type: 'highlight',
            label: 'Look deeper',
            text: 'Festival food is not only about taste. It often carries meaning and memory.',
          },
          { type: 'keywords', items: ['memory', 'season', 'sharing'] },
        ],
      },
      {
        id: 'maps-places',
        title: 'Maps and places',
        duration: '8 min',
        summary: 'Use simple maps to connect cultural practices with place and region.',
        keywords: ['map', 'place', 'region'],
        viewerTitle: 'Place shapes daily life',
        viewerParagraphs: [
          'Weather, rivers, land, and distance can shape homes, food, work, and travel.',
          'Maps help us ask where people live and how that place supports their daily routines.',
        ],
        example: 'A coastal community may eat more fish because the sea is close.',
        practicePrompt: 'Find one place on a map and name one feature that may shape daily life there.',
        notes: [
          { type: 'heading', text: 'Culture and place connect' },
          {
            type: 'paragraph',
            text: 'People often build traditions around the materials, climate, and travel routes available to them.',
          },
          {
            type: 'bullet-list',
            items: ['Look for water, mountains, or plains.', 'Think about travel and trade.', 'Connect place to food or work.'],
          },
          {
            type: 'highlight',
            label: 'Helpful question',
            text: 'What is easy to grow, build, or travel to in this place?',
          },
          { type: 'keywords', items: ['region', 'climate', 'travel'] },
        ],
      },
      {
        id: 'respectful-questions',
        title: 'Respectful questions',
        duration: '7 min',
        summary: 'Learn how to ask about another culture with curiosity and care.',
        keywords: ['respectful questions', 'curiosity', 'listening'],
        viewerTitle: 'Curiosity works best with respect',
        viewerParagraphs: [
          'Respectful questions are open, gentle, and ready to listen to the answer.',
          'People are more likely to share when they feel seen instead of judged.',
        ],
        example: 'Respectful question: "Can you tell me what this celebration means to your family?"',
        practicePrompt: 'Rewrite one yes/no question into an open question that invites sharing.',
        notes: [
          { type: 'heading', text: 'Ask to understand, not to prove a point' },
          {
            type: 'paragraph',
            text: 'Listening fully is part of respectful communication, not something separate from it.',
          },
          {
            type: 'bullet-list',
            items: ['Use calm language.', 'Ask one clear question.', 'Listen before asking the next one.'],
          },
          {
            type: 'highlight',
            label: 'Good practice',
            text: 'Questions beginning with how, what, or can you tell me often feel more welcoming.',
          },
          { type: 'keywords', items: ['open question', 'listen', 'care'] },
        ],
      },
      {
        id: 'culture-reflection',
        title: 'Reflection and review',
        duration: '5 min',
        summary: 'Review how culture, place, and respect fit together in daily learning.',
        keywords: ['reflection', 'review', 'culture'],
        viewerTitle: 'Reflection helps ideas stay useful',
        viewerParagraphs: [
          'A review helps you keep the key insight from each lesson instead of loose facts.',
          'When you reflect on your own experiences too, cultural learning feels more personal and honest.',
        ],
        example: 'Reflection: "I learned that customs and festivals make more sense when I connect them to place and community."',
        practicePrompt: 'Write one thing you learned about another culture and one thing it made you think about in your own life.',
        notes: [
          { type: 'heading', text: 'Compare with care' },
          {
            type: 'paragraph',
            text: 'Comparison can help learning when it stays respectful and grounded in real details.',
          },
          {
            type: 'bullet-list',
            items: ['Review one custom.', 'Review one place-based idea.', 'Review one respectful question.'],
          },
          {
            type: 'highlight',
            label: 'Big idea',
            text: 'Learning about culture is really learning about people, place, and meaning together.',
          },
          { type: 'keywords', items: ['comparison', 'meaning', 'community'] },
        ],
      },
    ],
    quiz: {
      title: 'World Cultures Quiz',
      description: 'Review cultural understanding, place-based thinking, and respectful communication.',
      questions: [
        {
          id: 'custom',
          prompt: 'What is a custom?',
          options: [
            'A common way people behave or celebrate',
            'Only a map symbol',
            'A type of science tool',
            'A difficult math rule',
          ],
          correctAnswer: 'A common way people behave or celebrate',
          feedback: {
            correct: 'Correct. Customs often appear in everyday greetings, food, and community life.',
            incorrect: 'A custom is a common practice or habit shared in a community.',
          },
        },
        {
          id: 'festival-food',
          prompt: 'Why can food matter during festivals?',
          options: [
            'It can carry memory and meaning',
            'It removes the need for tradition',
            'It changes the weather',
            'It replaces all other activities',
          ],
          correctAnswer: 'It can carry memory and meaning',
          feedback: {
            correct: 'Correct. Festival food often connects family, season, and tradition.',
            incorrect: 'Think about food as part of memory, identity, and shared celebration.',
          },
        },
        {
          id: 'place',
          prompt: 'What can a map help you understand about culture?',
          options: ['How place shapes daily life', 'Only the color of a flag', 'Only one person’s opinion', 'Nothing about daily life'],
          correctAnswer: 'How place shapes daily life',
          feedback: {
            correct: 'Correct. Place can shape food, work, movement, and traditions.',
            incorrect: 'Maps help you connect place, climate, movement, and daily routines.',
          },
        },
        {
          id: 'respect',
          prompt: 'Which question sounds most respectful?',
          options: [
            'Can you tell me what this celebration means to your family?',
            'Why do you do strange things?',
            'Is your way the only correct one?',
            'Do all people in your country act the same way?',
          ],
          correctAnswer: 'Can you tell me what this celebration means to your family?',
          feedback: {
            correct: 'Correct. It invites sharing without judging.',
            incorrect: 'A respectful question is open, calm, and ready to listen.',
          },
        },
      ],
    },
  },
  {
    id: 'computer-basics',
    title: 'Computer Basics',
    description:
      'Learn simple computer parts, safe typing habits, and basic internet use.',
    category: 'Digital Skills',
    level: 'Beginner',
    duration: '3 lessons',
    icon: Monitor,
    tone: 'bg-palette-pink/45 text-navy',
    searchTerms: ['computer', 'keyboard', 'mouse', 'internet', 'digital'],
    lessons: [
      {
        id: 'computer-parts',
        title: 'Computer parts',
        duration: '6 min',
        summary: 'Learn the names of common computer parts and what they do.',
        keywords: ['computer', 'screen', 'keyboard'],
        viewerTitle: 'Know the basic parts',
        viewerParagraphs: [
          'A computer has parts that help you see, type, click, and hear.',
          'Learning the names first makes every next step easier.',
        ],
        example: 'The screen shows work, the keyboard types words, and the mouse helps you click.',
        practicePrompt: 'Point to a screen, keyboard, and mouse if you can see them nearby.',
        notes: [
          { type: 'heading', text: 'Main parts' },
          {
            type: 'paragraph',
            text: 'Start with the parts you use most often.',
          },
          {
            type: 'bullet-list',
            items: ['Screen shows information.', 'Keyboard types letters.', 'Mouse helps you click.'],
          },
          {
            type: 'paragraph',
            text: 'You do not have to remember everything at once. First learn what each part is called, then learn how it helps you finish a small task.',
          },
          {
            type: 'bullet-list',
            items: [
              'Use the screen to read messages.',
              'Use the keyboard to enter words and numbers.',
              'Use the mouse or touchpad to choose buttons and links.',
            ],
          },
          {
            type: 'highlight',
            label: 'Simple idea',
            text: 'Each part has one main job.',
          },
          {
            type: 'highlight',
            label: 'Try this',
            text: 'Say the part name before using it: screen, keyboard, mouse. This builds confidence.',
          },
          { type: 'keywords', items: ['screen', 'keyboard', 'mouse'] },
        ],
      },
      {
        id: 'typing-practice',
        title: 'Typing practice',
        duration: '7 min',
        summary: 'Use slow typing practice to make letters and words feel familiar.',
        keywords: ['typing', 'letters', 'practice'],
        viewerTitle: 'Type slowly first',
        viewerParagraphs: [
          'Fast typing comes later. At the start, accuracy matters more than speed.',
          'Short daily typing practice helps your fingers remember the keys.',
        ],
        example: 'Practice line: My name is Ravi.',
        practicePrompt: 'Type your name three times slowly and check every letter.',
        notes: [
          { type: 'heading', text: 'Build comfort' },
          {
            type: 'paragraph',
            text: 'Typing gets easier when you repeat short lines calmly.',
          },
          {
            type: 'bullet-list',
            items: ['Sit comfortably.', 'Type slowly.', 'Check the letters.'],
          },
          {
            type: 'paragraph',
            text: 'Typing practice should feel calm. If you make a mistake, delete it and type the word again slowly.',
          },
          {
            type: 'bullet-list',
            items: [
              'Start with your name.',
              'Then type one short sentence.',
              'Read the sentence before pressing enter.',
            ],
          },
          {
            type: 'highlight',
            label: 'Remember',
            text: 'Slow and correct is better than fast and confused.',
          },
          {
            type: 'highlight',
            label: 'Practice habit',
            text: 'Five careful minutes every day is enough for a beginner.',
          },
          { type: 'keywords', items: ['type', 'slow', 'letters'] },
        ],
      },
      {
        id: 'internet-safety',
        title: 'Internet safety',
        duration: '8 min',
        summary: 'Learn simple rules for safer browsing and personal information.',
        keywords: ['internet', 'safe', 'password'],
        viewerTitle: 'Stay careful online',
        viewerParagraphs: [
          'The internet can help you learn, but you should be careful with personal information.',
          'Passwords, phone numbers, and addresses should not be shared with unknown people.',
        ],
        example: 'A safe habit is asking a trusted adult before entering personal details online.',
        practicePrompt: 'Write one thing you should not share with strangers online.',
        notes: [
          { type: 'heading', text: 'Simple safety rules' },
          {
            type: 'paragraph',
            text: 'Good online habits protect your information.',
          },
          {
            type: 'bullet-list',
            items: ['Keep passwords private.', 'Avoid unknown links.', 'Ask before sharing details.'],
          },
          {
            type: 'paragraph',
            text: 'Online safety is mostly about pausing before you click or share. A short pause can stop many problems.',
          },
          {
            type: 'bullet-list',
            items: [
              'Do not share your password.',
              'Do not share your home address with strangers.',
              'Tell a trusted adult if something online feels wrong.',
            ],
          },
          {
            type: 'highlight',
            label: 'Safety first',
            text: 'When unsure, pause and ask someone you trust.',
          },
          {
            type: 'highlight',
            label: 'Safe choice',
            text: 'A real learning website should not ask for private details without a clear reason.',
          },
          { type: 'keywords', items: ['safe', 'password', 'privacy'] },
        ],
      },
    ],
    quiz: {
      title: 'Computer Basics Quiz',
      description: 'Review simple computer parts, typing habits, and online safety.',
      questions: [
        {
          id: 'screen',
          prompt: 'Which part shows words and pictures?',
          options: ['Screen', 'Keyboard', 'Mouse', 'Bag'],
          correctAnswer: 'Screen',
          feedback: {
            correct: 'Correct. The screen shows what is happening on the computer.',
            incorrect: 'The screen is the part you look at.',
          },
        },
        {
          id: 'typing',
          prompt: 'What is best when you are learning to type?',
          options: ['Type slowly and correctly', 'Press random keys', 'Close your eyes', 'Rush every word'],
          correctAnswer: 'Type slowly and correctly',
          feedback: {
            correct: 'Correct. Slow typing helps you learn the keys.',
            incorrect: 'Start slowly so your fingers learn the letters.',
          },
        },
        {
          id: 'password',
          prompt: 'What should you do with your password?',
          options: ['Keep it private', 'Share it with strangers', 'Write it on a public wall', 'Post it online'],
          correctAnswer: 'Keep it private',
          feedback: {
            correct: 'Correct. A password protects your account.',
            incorrect: 'Passwords should stay private.',
          },
        },
        {
          id: 'keyboard',
          prompt: 'Which part helps you type letters?',
          options: ['Keyboard', 'Screen', 'Bottle', 'Chair'],
          correctAnswer: 'Keyboard',
          feedback: {
            correct: 'Correct. The keyboard has keys for typing letters and numbers.',
            incorrect: 'The keyboard is the part used for typing.',
          },
        },
        {
          id: 'ask-first',
          prompt: 'What should you do before sharing personal details online?',
          options: ['Ask a trusted adult', 'Click every link', 'Share quickly', 'Ignore safety'],
          correctAnswer: 'Ask a trusted adult',
          feedback: {
            correct: 'Correct. Asking first is a safe online habit.',
            incorrect: 'It is safer to ask before sharing private details online.',
          },
        },
      ],
    },
  },
  {
    id: 'money-basics',
    title: 'Money Basics',
    description:
      'Practice simple money ideas like saving, spending, needs, and wants.',
    category: 'Life Skills',
    level: 'Beginner',
    duration: '3 lessons',
    icon: WalletCards,
    tone: 'bg-palette-green/55 text-navy',
    searchTerms: ['money', 'saving', 'spending', 'needs', 'wants'],
    lessons: [
      {
        id: 'needs-wants',
        title: 'Needs and wants',
        duration: '6 min',
        summary: 'Understand the difference between things you need and things you want.',
        keywords: ['needs', 'wants', 'choice'],
        viewerTitle: 'Needs come first',
        viewerParagraphs: [
          'A need is something important for daily life, like food, water, or school supplies.',
          'A want is something nice to have, but not always necessary right now.',
        ],
        example: 'A notebook for class is a need. A new toy may be a want.',
        practicePrompt: 'Write two needs and two wants from your daily life.',
        notes: [
          { type: 'heading', text: 'Sort the choice' },
          {
            type: 'paragraph',
            text: 'Sorting needs and wants helps you make better money choices.',
          },
          {
            type: 'bullet-list',
            items: ['Need: important now.', 'Want: nice to have.', 'Choose needs first.'],
          },
          {
            type: 'paragraph',
            text: 'This choice is not about good or bad. Wants are okay, but needs should usually be handled first.',
          },
          {
            type: 'bullet-list',
            items: [
              'Food for lunch can be a need.',
              'A notebook for school can be a need.',
              'A toy or extra snack can be a want.',
            ],
          },
          {
            type: 'highlight',
            label: 'Helpful question',
            text: 'Do I need this today, or do I only want it?',
          },
          {
            type: 'highlight',
            label: 'Easy rule',
            text: 'Needs help you continue your day. Wants make the day nicer.',
          },
          { type: 'keywords', items: ['need', 'want', 'choice'] },
        ],
      },
      {
        id: 'saving-small',
        title: 'Saving small amounts',
        duration: '7 min',
        summary: 'See how saving a little money regularly can grow over time.',
        keywords: ['saving', 'habit', 'money'],
        viewerTitle: 'Small saving can grow',
        viewerParagraphs: [
          'Saving means keeping some money for later instead of spending all of it now.',
          'Even a small amount becomes useful when you save it again and again.',
        ],
        example: 'If you save 5 rupees each day, you save 35 rupees in one week.',
        practicePrompt: 'Choose one small amount you could save this week.',
        notes: [
          { type: 'heading', text: 'Save before spending all' },
          {
            type: 'paragraph',
            text: 'Saving works best when it becomes a simple habit.',
          },
          {
            type: 'bullet-list',
            items: ['Keep a small amount aside.', 'Repeat the habit.', 'Use savings for a clear goal.'],
          },
          {
            type: 'paragraph',
            text: 'Saving does not mean you can never spend. It means you are choosing to keep some money for a better time.',
          },
          {
            type: 'bullet-list',
            items: [
              'Pick one small saving goal.',
              'Save the same amount again and again.',
              'Count your savings at the end of the week.',
            ],
          },
          {
            type: 'highlight',
            label: 'Simple math',
            text: 'Small amounts can become bigger through repetition.',
          },
          {
            type: 'highlight',
            label: 'Example',
            text: 'Saving 5 rupees for 7 days gives 35 rupees.',
          },
          { type: 'keywords', items: ['save', 'repeat', 'goal'] },
        ],
      },
      {
        id: 'spending-plan',
        title: 'Simple spending plan',
        duration: '8 min',
        summary: 'Make a small plan before spending money.',
        keywords: ['plan', 'spending', 'budget'],
        viewerTitle: 'Plan before you spend',
        viewerParagraphs: [
          'A spending plan helps you decide where money should go.',
          'Planning first can stop quick choices that you may regret later.',
        ],
        example: 'Plan: 20 rupees for a notebook, 10 rupees saved, and 5 rupees for a snack.',
        practicePrompt: 'Make a simple plan for 50 rupees using needs, savings, and wants.',
        notes: [
          { type: 'heading', text: 'Use three boxes' },
          {
            type: 'paragraph',
            text: 'A beginner plan can be very simple.',
          },
          {
            type: 'bullet-list',
            items: ['Box 1: needs.', 'Box 2: savings.', 'Box 3: wants.'],
          },
          {
            type: 'paragraph',
            text: 'A spending plan does not need difficult math. It just helps you think before the money is gone.',
          },
          {
            type: 'bullet-list',
            items: [
              'Write the total money first.',
              'Put needs before wants.',
              'Keep a little money aside if possible.',
            ],
          },
          {
            type: 'highlight',
            label: 'Good habit',
            text: 'A plan gives your money a job.',
          },
          {
            type: 'highlight',
            label: 'Beginner tip',
            text: 'If the plan does not fit, change the want first, not the need.',
          },
          { type: 'keywords', items: ['budget', 'plan', 'spend'] },
        ],
      },
    ],
    quiz: {
      title: 'Money Basics Quiz',
      description: 'Review needs, wants, saving, and simple spending plans.',
      questions: [
        {
          id: 'need',
          prompt: 'Which one is usually a need for school?',
          options: ['Notebook', 'Extra toy', 'Fancy sticker', 'Video game'],
          correctAnswer: 'Notebook',
          feedback: {
            correct: 'Correct. A notebook helps with school work.',
            incorrect: 'A need is something important for daily life or study.',
          },
        },
        {
          id: 'saving',
          prompt: 'What does saving money mean?',
          options: ['Keeping some money for later', 'Spending everything now', 'Losing money', 'Ignoring money'],
          correctAnswer: 'Keeping some money for later',
          feedback: {
            correct: 'Correct. Saving means keeping money for a future use.',
            incorrect: 'Saving means not spending all the money right away.',
          },
        },
        {
          id: 'plan',
          prompt: 'Why is a spending plan useful?',
          options: ['It helps you choose before spending', 'It makes money disappear', 'It removes all needs', 'It forces guessing'],
          correctAnswer: 'It helps you choose before spending',
          feedback: {
            correct: 'Correct. A plan helps you decide before spending.',
            incorrect: 'A plan helps you think before using money.',
          },
        },
        {
          id: 'want',
          prompt: 'What is a want?',
          options: ['Something nice but not always necessary', 'Something needed to stay safe', 'Only food and water', 'Always the first choice'],
          correctAnswer: 'Something nice but not always necessary',
          feedback: {
            correct: 'Correct. A want is nice to have, but a need comes first.',
            incorrect: 'A want is something you may like, but may not need right now.',
          },
        },
        {
          id: 'weekly-saving',
          prompt: 'If you save 5 rupees each day for 7 days, how much do you save?',
          options: ['35 rupees', '7 rupees', '12 rupees', '5 rupees'],
          correctAnswer: '35 rupees',
          feedback: {
            correct: 'Correct. 5 rupees for 7 days makes 35 rupees.',
            incorrect: 'Add 5 seven times, or multiply 5 by 7.',
          },
        },
      ],
    },
  },
]

export const dailyTip = {
  title: 'Daily learning tip',
  text: 'Study for ten calm minutes today. Small sessions are easier to repeat and easier to trust.',
}

const normalizeText = (value = '') => value.toLowerCase().trim()

const uniqueById = (items) => {
  const seen = new Set()

  return items.filter((item) => {
    if (seen.has(item.id)) {
      return false
    }

    seen.add(item.id)
    return true
  })
}

export function getCourseById(courseId) {
  return courses.find((course) => course.id === courseId)
}

export function getLessonById(course, lessonId) {
  return course?.lessons.find((lesson) => lesson.id === lessonId)
}

export function getLessonIndex(course, lessonId) {
  return course?.lessons.findIndex((lesson) => lesson.id === lessonId) ?? -1
}

export function getPreviousLesson(course, lessonId) {
  const lessonIndex = getLessonIndex(course, lessonId)

  if (lessonIndex <= 0) {
    return null
  }

  return course.lessons[lessonIndex - 1]
}

export function getNextLesson(course, lessonId) {
  const lessonIndex = getLessonIndex(course, lessonId)

  if (lessonIndex === -1 || lessonIndex === course.lessons.length - 1) {
    return null
  }

  return course.lessons[lessonIndex + 1]
}

function courseMatchesQuery(course, query) {
  if (!query) {
    return true
  }

  const lessonText = course.lessons
    .map((lesson) => `${lesson.title} ${lesson.summary} ${lesson.keywords.join(' ')}`)
    .join(' ')

  const haystack = normalizeText(
    `${course.title} ${course.description} ${course.category} ${course.level} ${course.searchTerms.join(
      ' ',
    )} ${lessonText}`,
  )

  return haystack.includes(query)
}

export function getMatchingLessons(course, query) {
  const normalizedQuery = normalizeText(query)

  if (!normalizedQuery) {
    return course.lessons
  }

  return course.lessons.filter((lesson) => {
    const haystack = normalizeText(
      `${lesson.title} ${lesson.summary} ${lesson.keywords.join(' ')} ${lesson.practicePrompt}`,
    )

    return haystack.includes(normalizedQuery)
  })
}

export function filterCourses(query) {
  const normalizedQuery = normalizeText(query)

  return courses.filter((course) => courseMatchesQuery(course, normalizedQuery))
}

export function getCatalogSuggestions(query) {
  const normalizedQuery = normalizeText(query)

  if (!normalizedQuery) {
    return []
  }

  const suggestions = []

  courses.forEach((course) => {
    const courseSearchArea = normalizeText(
      `${course.title} ${course.description} ${course.category} ${course.searchTerms.join(' ')}`,
    )

    if (courseSearchArea.includes(normalizedQuery)) {
      suggestions.push({
        id: `course-${course.id}`,
        type: 'course',
        title: course.title,
        subtitle: `${course.category} • ${course.duration}`,
        to: `/courses/${course.id}`,
      })
    }

    course.lessons.forEach((lesson) => {
      const lessonSearchArea = normalizeText(
        `${lesson.title} ${lesson.summary} ${lesson.keywords.join(' ')} ${lesson.practicePrompt}`,
      )

      if (lessonSearchArea.includes(normalizedQuery)) {
        suggestions.push({
          id: `lesson-${course.id}-${lesson.id}`,
          type: 'lesson',
          title: lesson.title,
          subtitle: `${course.title} • ${lesson.duration}`,
          to: `/courses/${course.id}?lesson=${lesson.id}`,
        })
      }
    })
  })

  return uniqueById(suggestions).slice(0, 6)
}
