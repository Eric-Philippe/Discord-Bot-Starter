import db from "database";
import { UserProfile } from "types/UserProfile";

export default class UserProfileManager {
  static async getXp(userid: string): Promise<number> {
    const query = db.query("SELECT * FROM USER_PROFILE WHERE userid = $userid");

    const result = (await query.all({
      $userid: userid,
    })) as UserProfile[];

    if (result.length === 0) return 0;

    return result[0].xp;
  }

  static async addXp(userid: string, xp: number): Promise<void> {
    const query = db.query(
      "INSERT INTO USER_PROFILE (userid, xp) VALUES ($userid, $xp) ON CONFLICT(userid) DO UPDATE SET xp = xp + $xp"
    );

    await query.run({
      $userid: userid,
      $xp: xp,
    });
  }

  static async setXp(userid: string, xp: number): Promise<void> {
    const query = db.query(
      "INSERT INTO USER_PROFILE (userid, xp) VALUES ($userid, $xp) ON CONFLICT(userid) DO UPDATE SET xp = $xp"
    );

    await query.run({
      $userid: userid,
      $xp: xp,
    });
  }

  static async create(userid: string): Promise<void> {
    const query = db.query(
      "INSERT INTO USER_PROFILE (userid, xp) VALUES ($userid, 0)"
    );

    await query.run({
      $userid: userid,
    });
  }

  static async doesExist(userid: string): Promise<boolean> {
    const query = db.query("SELECT * FROM USER_PROFILE WHERE userid = $userid");

    const result = (await query.all({
      $userid: userid,
    })) as UserProfile[];

    return result.length > 0;
  }
}
