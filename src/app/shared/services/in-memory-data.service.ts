import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const activity = [
      {
        id: 1,
        name: 'Video editing',
        img: 'assets/img/projects/video.png',
        description: 'I have been editing videos since childhood. In the past, when I played a lot of games, I often made game montages. ' +
          'In 2019 I switched to Adobe Premiere Pro because it had better integration with the other Adobe products. ' +
          'This editing software is quite expensive, especially for a student, so piratebay helped me out with that. ' +
          'I also worked on some VFX using Adobe Premiere Pro and Adobe After Effects later on. ' +
          'Unfortunately I don\'t spend a lot of time editing videos anymore, but I occasionally try to make a funny meme.'
      },
      {
        id: 2,
        name: 'Project week',
        img: 'assets/img/projects/project.png',
        description: 'The start of the second semester started with the project week. ' +
          'This week, several seminars, workshops and group sessions were planned that mainly revolved around soft skills, research, team building and a few other topics.\n' +
          'We had previously conducted a Thalento test, based on this test you were divided into a group with whom you had to work on the research project.'
      },
      {
        id: 3,
        name: 'POP-sessions',
        img: 'assets/img/projects/pop.png',
        description: 'I participated in three different POP-sessions. ' +
          'During these sessions, the focus was on personal development, the intoxication of digital devices and I also learned about the importance of feedback and the balance between positive and negative feedback.'
      },
      {
        id: 4,
        name: 'Game development',
        img: 'assets/img/projects/game.png',
        description: 'I always like to try out something new. I heard from a friend about a new game engine called Godot. ' +
          'It looked relatively simple and I\'ve always wanted to try out game development. ' +
          'So during the summer holidays I spent 3 weeks developing a small RPG. ' +
          'During this period I learned a lot and I would like to try this again in the near future.'
      },
      {
        id: 5,
        name: 'Seminars',
        img: 'assets/img/projects/seminar.png',
        description: 'During my school education at PXL I participated in 8 seminars. ' +
          'These ranged from UX in application development to self-sovereign identity. ' +
          'I have had the opportunity to learn from experts in the field and I also like to participate in seminars on a non-binding basis.'
      },
      {
        id: 6,
        name: 'Innovation route AI',
        img: 'assets/img/projects/ai.png',
        description: 'During the innovation route, 3 companies came by to explain more about AI.\n' +
          '\n' +
          'Brainjar talked about the domain of deep learning. During the seminar I had the opportunity to train a model myself using tools such as Keras.\n' +
          '\n' +
          'Mediaan gave an introduction to computer vision. I also got a hands-on exercise where the goal was to drive a robot vacuum cleaner without bumping into walls.\n' +
          '\n' +
          'And lastly, we also had a workshop from Cegeka that focused on Fast AI 2. First there was a short informative introduction and finally an assignment about categorizing images.'
      },
      {
        id: 7,
        name: 'Google Hash Code',
        img: 'assets/img/projects/hackathon.png',
        description: 'Together with a team of 3 other people I participated in Google Hash Code 2021. ' +
          'The assignment was to arrange a simulation of traffic lights so that it works as efficiently as possible.\n' +
          'It was a very tough task but we did our best and so we were able to solve some problems until the time was up. ' +
          'In the future I want to give this another chance and improve my previous score.'
      },
      {
        id: 8,
        name: 'Electronics',
        img: 'assets/img/projects/electronic.png',
        description: 'Because I am becoming increasingly interested in IoT, I would also like to learn something about electronics this year. ' +
          'In the meantime I have already purchased an arduino with which I can perform some experiments. ' +
          'When I have some more free time I will fully get started with this and hopefully I can make something cool.'
      },
      {
        id: 9,
        name: 'Investing course',
        img: 'assets/img/projects/safe.png',
        description: 'I have purchased a course in which I can attend a weekly seminar that will give some more information about the world of investing. ' +
          'This course is offered by Spaarvarkens. In the meantime I have learned a lot and I will try to follow the financial market a bit from now on.'
      }
    ];

    const project = [
      {
        id: 1,
        name: 'Hybrid Crypto',
        img: 'assets/img/projects/encryption.png'
      },
      {
        id: 2,
        name: '&Tiro',
        img: 'assets/img/projects/tiro.png'
      },
      {
        id: 3,
        name: 'Smarthome',
        img: 'assets/img/projects/smarthome.png'
      },
      {
        id: 4,
        name: 'Personal Website',
        img: 'assets/img/projects/website.png'
      },
      {
        id: 5,
        name: 'Action RPG',
        img: 'assets/img/projects/gamedevelopment.png'
      },
    ];
    return {activity, project};
  }

  genId(activity: any[]): number {
    return activity.length > 0 ? activity.length + 1 : 1;
  }
}

/*
GET /api/activity              all activity objects
POST /api/activity             create activity object (without id)
DELETE /api/activity/1         delete activity object with id 1
*/
