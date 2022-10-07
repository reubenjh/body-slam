# Body slam

Body slam is a blazingly fast web framework for Rust. Jokes.

It's a technical interview template.

## What is this app?

This app takes some source data about what moves Snorlax can learn and displays it in a table. The data is stored in a JSON file. There will never be more than say 10 or 15 moves that Snorlax can learn, so the table won't need pagination, sorting etc. The app is intended to be used by Snorlax trainers to help them decide which moves to teach their Snorlax. Expect a couple hundred users at most, and very limited development in the future beyond the tasks described below other than filling out all the possible moves.

You're welcome to change anything you want about the app, data structure, components, style system, types etc, but you don't need to. Please explain if you do so. The only thing we ask you don't do is add more moves.

Plan to spend 1-2 hours on it. If you're not done in 2 hours, that's fine, just send us what you have. We're not looking for perfection, just a sense of how you work.

## Todo

We want to make some minor improvements.

- The table does need to be styled a little bit to not look like complete rubbish.
- Make the moves in the table clickable, taking you to a page dedicated to each move.
- The new move specific pages should render the move's name, type, and power, as well as an image of a snorlax using the move (find these on google search, don't spend much time on this, just get any old img if you can't find a good fit quickly).
- The move specific pages should be styled with a page background color fitting the elemental type of the move.
- Add a header with a link that takes you back to the main page with snorlax and his moves.

Stretch goals (if you find you have time, pick any of these that look enjoyable to you).

- Add functionality to calculate the damage potential for each move based on it's pp (how many times it can be used) and damage (how much damage it does). The damage potential is the product of the two. The damage potential should be displayed in the table and on the move specific page.
- Deploy the app and make it accessible to the public (can also add SEO metadata Head tags to the move specific pages to render the image, title and some description with details on the power and pp or the move).
- Store the data in the sqlite database provided instead of a JSON file and query it from the frontend (tRPC has been included in the project as a means of querying the data, and prisma has been included as a means of interacting with your sqlite database).
