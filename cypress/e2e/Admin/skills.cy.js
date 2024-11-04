import skillsPage from '../../pages/Admin/skillsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Skills Page Tests', () => {
  const newSkillName = `Skill ${Math.floor(Math.random() * 1000)}`;
  const editedSkillName = `Edited Skill ${Math.floor(Math.random() * 1000)}`;
  const skillDescription = 'This is a test skill description.';

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSkills');
  });

  it('should add a new skill', () => {
    skillsPage.clickAddSkill();
    skillsPage.enterSkillName(newSkillName);
    skillsPage.enterSkillDescription(skillDescription);
    skillsPage.clickSaveSkill();
    skillsPage.verifySkillInList(newSkillName);
  });

  it('should edit an existing skill', () => {
    skillsPage.clickEditSkill(newSkillName);
    skillsPage.enterSkillName(editedSkillName);
    skillsPage.clickSaveSkill();
    skillsPage.verifySkillInList(editedSkillName);
  });

  it('should delete a skill', () => {
    skillsPage.clickDeleteSkill(editedSkillName);
    skillsPage.confirmDelete();
    skillsPage.verifySkillNotInList(editedSkillName);
  });
});
